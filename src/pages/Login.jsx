import { KeyRound } from 'lucide-react';
export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 font-iosevka text-red-900">Login <KeyRound className="inline size-8 stroke-red-900 stroke-1" /></h1>

            <form className="flex flex-col gap-7">
                <input type="email" placeholder="E-mail" className="border rounded-xl px-4 py-6" />

                <input type="passoword" placeholder="Senha" className="border rounded-xl px-4 py-6"/>

                <button type="submit" className="bg-red-900 text-white rounded-4xl py-4 w-90 mx-auto">Login</button> 


            </form>
        </>
    )
}