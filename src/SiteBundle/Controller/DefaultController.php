<?php

namespace SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction() {
        return $this->render('SiteBundle:Default:index.html.twig');
    }

    public function streetAction() {
        return $this->render('@Site/Default/Albums/street.html.twig');
    }

    public function landscapesAction() {
        return $this->render('@Site/Default/Albums/landscapes.html.twig');
    }

    public function peopleAction() {
        return $this->render('@Site/Default/Albums/people.html.twig');
    }

    public function detailPageAction() {
        return $this->render('@Site/Default/detailpage.html.twig');
    }
}
