<?php

namespace App\Controller;

use App\Entity\Expenses;
use App\Form\ExpensesType;
use App\Repository\ExpensesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/')]
class ExpensesController extends AbstractController
{
    #[Route('/', name: 'app_expenses_index', methods: ['GET'])]
    public function index(ExpensesRepository $expensesRepository): Response
    {
        return $this->render('index.html.twig', [
            'expenses' => $expensesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_expenses_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ExpensesRepository $expensesRepository): Response
    {
        $expense = new Expenses();
        $form = $this->createForm(ExpensesType::class, $expense);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $expensesRepository->save($expense, true);

            return $this->redirectToRoute('app_expenses_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('expenses/new.html.twig', [
            'expense' => $expense,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_expenses_show', methods: ['GET'])]
    public function show(Expenses $expense): Response
    {
        return $this->render('expenses/show.html.twig', [
            'expense' => $expense,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_expenses_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Expenses $expense, ExpensesRepository $expensesRepository): Response
    {
        $form = $this->createForm(ExpensesType::class, $expense);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $expensesRepository->save($expense, true);

            return $this->redirectToRoute('app_expenses_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('expenses/edit.html.twig', [
            'expense' => $expense,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_expenses_delete', methods: ['POST'])]
    public function delete(Request $request, Expenses $expense, ExpensesRepository $expensesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$expense->getId(), $request->request->get('_token'))) {
            $expensesRepository->remove($expense, true);
        }

        return $this->redirectToRoute('app_expenses_index', [], Response::HTTP_SEE_OTHER);
    }
}
