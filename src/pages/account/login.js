import Header from "@/components/Header";
import Head from "next/head";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Link from "next/link";
import { useCallback, useState } from "react";



export default function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    },[])

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value)
    },[]) 

    return (
        <>
            <Head>
                <title>ログイン</title>
            </Head>
            <Header />
            <Form>
                <InputField label="登録メールアドレス" type="email" name="mail" onChange={ handleEmailChange } value={email}/>
                <InputField label="登録パスワード" type="password" name="password" onChange={ handlePasswordChange } value={password}/>
                <Button primary={true} text="Log In" type="button" onClick={() => console.log("Click!")} onSubmit={() => console.log("Click!")} />
                <p style={{textAlign: "center"}}>
                    アカウント登録は<Link href="./signup">こちら</Link>からこちらから
                </p>
            </Form>
        </>
    )
}