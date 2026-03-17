import { Lock } from 'lucide-react';
import { Key } from 'lucide-react';

export default function Cadastro() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 font-iosevka text-red-900">Cadastro <Key className="inline size-8 stroke-red-900 stroke-1" /></h1>

            <form className="flex flex-col gap-7">
                <input type="name" placeholder="Nome Completo" className="border rounded-xl px-4 py-5" />
                <input type="email" placeholder="Email" className="border rounded-xl px-4 py-5"/>
                <input type="passoword" placeholder="Senha" className="border rounded-xl px-4 py-5" />
                
                <button type="submit" className="bg-red-900 text-white rounded-4xl py-4 mx-auto w-90">
                
                    Cadastrar</button> 

            </form>
        </>
    )
}