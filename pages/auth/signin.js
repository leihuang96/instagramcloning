import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header'

// browser
export default function signIn({ providers }) {
  return (
    <>
      <Header/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// server side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}
