<?php

namespace JMS\TwigJsBundle\TwigJs\Compiler;

use Symfony\Bundle\FrameworkBundle\Translation\Translator;
use Symfony\Component\Translation\TranslatorInterface;
use TwigJs\JsCompiler;
use TwigJs\FilterCompilerInterface;

class TransFilterCompiler implements FilterCompilerInterface
{
    private $translator;
    private $loadCatalogueRef;
    private $catalogueRef;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function getName()
    {
        return 'trans';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Filter $node)
    {
        if (!($locale = $compiler->getDefine('locale')) || !$this->translator instanceof Translator) {
            return false;
        }

        // unfortunately, the Translation component does not provide a better
        // way to retrieve these
        $this->loadCatalogueRef = new \ReflectionMethod($this->translator, 'loadCatalogue');
        $this->loadCatalogueRef->setAccessible(true);
        $this->catalogueRef = new \ReflectionProperty($this->translator, 'catalogues');
        $this->catalogueRef->setAccessible(true);

        // ignore dynamic messages, we cannot resolve these
        // users can still apply a runtime trans filter to do this
        $subNode = $node->getNode('node');
        if (!$subNode instanceof \Twig_Node_Expression_Constant) {
            return false;
        }

        $id = $subNode->getAttribute('value');
        $domain = 'messages';
        $hasParams = false;

        $arguments = $node->getNode('arguments');
        if (count($arguments) > 0) {
            $hasParams = count($arguments->getNode(0)) > 0;

            if ($arguments->hasNode(1)) {
                $domainNode = $arguments->getNode(1);

                if (!$domainNode instanceof \Twig_Node_Expression_Constant) {
                    return false;
                }

                $domain = $domainNode->getAttribute('value');
            }
        }

        $catalogue = $this->getCatalogue($locale);

        if (!$hasParams) {
            $compiler->string($catalogue->get($id, $domain));

            return;
        }

        $compiler
            ->raw('twig.filter.replace(')
            ->string($catalogue->get($id, $domain))
            ->raw(", ")
            ->subcompile($arguments->getNode(0))
            ->raw(')')
        ;
    }

    private function getCatalogue($locale)
    {
        $this->loadCatalogueRef->invoke($this->translator, $locale);
        $catalogues = $this->catalogueRef->getValue($this->translator);

        return $catalogues[$locale];
    }
}
