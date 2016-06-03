<?php

namespace SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction() {
        return $this->render('SiteBundle:Default:index.html.twig');
    }

    public function detailPageAction() {
        return $this->render('@Site/Default/detailpage.html.twig');
    }
}
