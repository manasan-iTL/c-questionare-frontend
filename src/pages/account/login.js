import Header from "@/components/Header";
import Head from "next/head";
import InputField from "@/components/InputField";
import classes from "@/styles/login.module.css"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Link from "next/link";



export default function Login (props) {


    return (
        <>
            <Head>
                <title>ログイン</title>
            </Head>
            <Header />
            <Form>
            </Form>
        </>
    )
}