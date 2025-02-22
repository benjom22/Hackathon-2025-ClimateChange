// pages/auth/signin.tsx
'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';
import Input from '../ui/Input';
import Link from 'next/link';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loginStarted, setLoginStarted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStarted(true);
    setError(null);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // Don't redirect automatically, we'll handle it ourselves
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/dashboard'); // Redirect to the dashboard on successful login
    }

    setLoginStarted(false);
  };

  return (
    <div className="flex items-center p-5 bg-forestGreen-700 gap-10 h-screen">
      <Image
        src="/auth_background.png"
        width={1300}
        height={1900}
        className="max-md:hidden object-cover w-1/2 h-full rounded-xl"
        alt="background-auth"
      />

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-[500px] flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold text-[2.25rem] lg:text-[3rem] leading-[120%]">Sign In</h1>
            <p className="text-forestGreen-100">
              Don't have an account?{' '}
              <Link href="/auth/register" className="font-medium text-white underline">
                Register
              </Link>
            </p>
          </div>

          <form className="flex flex-col gap-8 sm:gap-12" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-5 w-full">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="email@example.com"
                required
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button className={`w-full ${loginStarted ? 'disabled' : ''}`} submitButton>
                {loginStarted ? (
                    <span className='flex items-center justify-center gap-2'>
                        Processing
                        <svg aria-hidden="true" className="w-5 h-5 text-earthGreen-300 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </span>
                ):(
                    <span>Login</span>
                )}
            </Button>
              {error && <div style={{ color: '#F77E6E' }}>{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
