import { Request, Response } from 'express'

import { prisma } from '../../data/postgres'

import { CreateTodoDto, UpdateTodoDto } from '../../domain/dto'

export class TodosController {

    constructor() {}

    public getTodos = async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany()
        return res.json(todos)
    }

    public postTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body)

        if (error) return res.status(400).json({ error })
    
        const createdTodo = await prisma.todo.create({
            data: createTodoDto!
        });

        res.json({ 
            message: 'Successfully created',
            data: createdTodo,
        })
    }

    public getTodo = async (req: Request, res: Response) => {
        const { id } = req.params

        if (isNaN(+id)) return res.status(400).json({
            error: `ID argument is not a number`
        })
        
        const todo = await prisma.todo.findFirst({
            where: { id: +id }
        });

        (todo)
            ? res.json(todo)
            : res.status(404).json({ error: `TODO with id ${id} not found` }) 
    }

    public updateTodo = async (req: Request, res: Response) => {
        const { id } = req.params
        const [error, updateTodoDto] = UpdateTodoDto.create({ id, ...req.body })

        if (error) return res.status(400).json({ error })


        const todo = await prisma.todo.findFirst({
            where: { id: +id }
        });

        if (!todo) {
            return res.status(404).json({
                error: `Todo with id ${id} not found`
            })
        }

        const updatedTodo = await prisma.todo.update({
            where: { id: +id },
            data: updateTodoDto!.values,
        })

        return res.json({
            message: `Successfully updated`,
            data: updatedTodo,
        })
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const { id } = req.params

        if (isNaN(+id)) return res.status(400).json({
            error: `ID argument is not a number`
        })

        const todo = await prisma.todo.findFirst({
            where: { id: +id }
        });

        if (!todo) return res.status(404).json({
            error: `TODO with id ${id} not found`
        })

        const deleted = await prisma.todo.delete({
            where: { id: +id }
        });

        (deleted)
            ? res.json(deleted)
            : res.status(404).json({
                error: `TODO with id ${id} not found`
            })
    }

}