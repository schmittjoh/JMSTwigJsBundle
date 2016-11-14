<?php

namespace JMS\TwigJsBundle\Tests\TwigJs\Compiler;

use JMS\TwigJsBundle\TwigJs\Compiler\TransFilterCompiler;
use Symfony\Bridge\Twig\Extension\TranslationExtension;
use Symfony\Component\Translation\MessageCatalogue;
use Symfony\Component\Translation\Translator;

class TransFilterCompilerTest extends BaseTestCase
{
    /**
     * @var Translator
     */
    private $translator;

    /**
     * {@inheritdoc}
     */
    protected function setUp()
    {
        parent::setUp();

        $this->translator = new Translator('en');

        $loader = $this->getMock('Symfony\Component\Translation\Loader\LoaderInterface');
        $loader
            ->expects($this->any())
            ->method('load')
            ->will($this->returnCallback(function($messages, $locale, $domain) {
                $catalogue = new MessageCatalogue($locale);
                $catalogue->add($messages, $domain);

                return $catalogue;
            }))
        ;
        $this->translator->addLoader('my', $loader);

        $this->compiler->addFilterCompiler(new TransFilterCompiler($this->translator));
        $this->env->addExtension(new TranslationExtension($this->translator));
    }

    public function testCompile()
    {
        $this->compiler->setDefine('locale', 'de');
        $this->addMessages(array('foo' => 'bar'), 'messages', 'de');

        $this->assertContains('sb.append(this.env_.filter("trans", "foo"));', $this->compile('{{ "foo"|trans|raw }}'));
    }

    public function testCompileWithParameters()
    {
        $this->compiler->setDefine('locale', 'en');
        $this->addMessages(array('remaining' => '%nb% remaining'));

        $this->assertContains(
            'sb.append(this.env_.filter("trans", "remaining", {"%nb%": ("nb" in context ? context["nb"] : null)}));',
            $this->compile('{{ "remaining"|trans({"%nb%": nb})|raw }}')
        );
    }

    public function testCompileDynamicTranslations()
    {
        $this->compiler->setDefine('locale', 'en');

        $this->assertContains('this.env_.filter("trans",', $this->compile(
            '{{ foo|trans }}'));
        $this->assertContains('this.env_.filter("trans",', $this->compile(
            '{{ "foo"|trans({}, bar) }}'));
    }

    public function testCompileWhenNoLocaleIsSet()
    {
        $this->addMessages(array('foo' => 'bar'));
        $this->assertContains('this.env_.filter("trans",', $this->compile(
            '{{ "foo"|trans }}'));
    }

    private function addMessages(array $messages, $domain = 'messages', $locale = 'en')
    {
        $this->translator->addResource('my', $messages, $locale, $domain);
    }
}
