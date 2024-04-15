import { AuthForm } from '@/components/AuthForm';
import { Typograph } from '@/components/Typograph';

export default async function Authentication({
    params
}:{ params: { type: "login" | "register" } }) {
    return (
        <div className='ring ring-zinc-800 text-gray-200 w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md'>
            <Typograph
                sx='title'
                className='mb-3'
            >{params.type == 'login' ? 'Login' : 'Cadastrar'}</Typograph>

            <AuthForm />
        </div>
    );
}