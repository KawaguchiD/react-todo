import React, { useEffect, useState } from "react";
import { List, Stack, Typography, TextField, Button } from '@mui/material'
import MUIListItem from "./components/MUIList";
import { GetMethod, POSTMethod, DeleteMethod, ChangeCheckboxMethod } from "./hooks/Fetch";
import useSWR, { mutate } from 'swr'

export const Todo = () => {
    const { data: fetchData } = useSWR("https://todolist-team1.deno.dev/api/todo", GetMethod,  { refreshInterval: 5000 })
    const url = "https://todolist-team1.deno.dev/api/todo"
    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        if (fetchData) {
            setTodoList(fetchData);
        }
    }, [fetchData])

    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    };
    const onClickAdd = () => {
        if (todoText === "") {
            return
    }
        const newTodo = {
            name: todoText,
            state: "open",
            id: "id"
        }
        todoList.push(newTodo);
        POSTMethod(url, newTodo)
        // mutate(url, newTodo,)
        setTodoText("");
    };

    const onClickCheckBox = async(data) => {
        const findTodo = await todoList.find(todo => todo.id === data.id)
        const status = await data.state === "open" ? {state: "done"} : {state: "open"}
        ChangeCheckboxMethod(findTodo.id, status)
    }
    const onClickDelete = data => {
        const filteredTodos = todoList.filter((todo) => todo.id !== data.id)
        setTodoList(filteredTodos);
        DeleteMethod(data.id)
    };

    return (
        <Stack sx={{textAlign: 'center', position: 'relative'}}>
            <Typography sx={{m: 2}} variant="h4">New Todo</Typography>
            <Stack sx={{display:'flex', flexDirection: 'initial', alignItems: 'center', justifyContent: 'center'}}>
                <TextField sx={{width: "60%"}} label="your todo" value={todoText} onChange={onChangeTodoText} />
                <Button onClick={onClickAdd}>追加</Button>
            </Stack>
            <List component="nav" aria-label="mailbox folders" sx={{width: "60%", margin: 'auto'}}>
                {todoList.map(data => (
                    <MUIListItem checked={data.state === "done" && true} key={data.id} name={data.name} id={data.id} onClickCheckBox={() => onClickCheckBox(data)} onClickDelete={() => onClickDelete(data)} />
                ))}
            </List>
        </Stack>
    );
}