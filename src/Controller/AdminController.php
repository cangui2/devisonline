<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }
    /**
     * @Route("/admin/test", name="admin")
     */
    public function test(Request $request): Response
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());
            var_dump($data);
        }
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }




}
