import Image from "next/image"
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server"

export default function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession()
    const user = getUser()

    return (
        <nav className="flex justify-between items-center py-6 font-bold w-4/5 mx-auto bg-white">
            <h1 className="text-3xl">KindeAuth</h1>
            <div className="flex gap-4 items-center">
                {!isAuthenticated() ? (
                    <>
                        <LoginLink className="bg-black text-white px-4 py-2 rounded">Sign in</LoginLink>
                        <RegisterLink className="bg-black text-white px-4 py-2 rounded">Sign up</RegisterLink>
                    </>
                ) : (
                    <div className="flex gap-4 font-normal">
                        {user?.picture ? (
                            <Image
                                className="rounded-full"
                                src={user?.picture}
                                width={55}
                                height={55}
                                alt="user profile avatar"
                            />
                        ) : (
                            <div className="bg-black text-white rounded-full p-4">
                                {user?.given_name?.[0]}
                                {user?.family_name?.[0]}
                            </div>
                        )}
                        <div>
                            <p className="text-2xl">
                                {user?.given_name} {user?.family_name}
                            </p>

                            <LogoutLink className="text-black">Log out</LogoutLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}