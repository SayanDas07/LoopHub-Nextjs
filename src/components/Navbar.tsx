import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { handleSignIn, handleSignOut } from "@/app/actions/authActions";


const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center h-9">
        <Link href="/">
        <Image src="/image.png" alt="LOGO" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
            {
                session && session?.user ? (
                    <>
                        <Link href = "/startup/create">
                            <span>Create</span>
                        </Link>

                        <form action={handleSignOut}>
                            <button type="submit">
                                Logout
                            </button>
                        </form>

                        <Link href = {`/users/`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <form action={handleSignIn}>
                        <button type="submit">
                            Login
                        </button>
                    </form>
                )
            }

        </div>
      </nav>
    </header>
  );
};

export default Navbar;