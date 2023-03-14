import Header from "@/components/Header";
import Head from "next/head";
import InputField from "@/components/InputField";
import classes from "@/styles/login.module.css"
import { useRef } from "react";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Link from "next/link";



export default function Login (props) {

    const emailEl = useRef(null)
    const passwordEl = useRef(null)

    return (
        <>
            <Head>
                <title>サインアップ</title>
            </Head>
            <Header />
            <Form>
                <InputField label="メールアドレス" type="email" name="mail" onChange={() => console.log(emailEl.current)} element={emailEl}/>
                <InputField label="パスワード" type="password" name="password" onChange={() => console.log(passwordEl.current)} element={passwordEl}/>
                <Button primary={true} text="Log In" type="button" onClick={() => console.log("Click!")} onSubmit={() => console.log("Click!")} />
            </Form>
        </>
    )
}