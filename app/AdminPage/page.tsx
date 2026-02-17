import React from "react"

import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"

const AdminPage: React.FC = () => {
    return (
        <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center px-4 py-12">
            <Card className="w-full max-w-lg border-border/60 bg-card/90 text-card-foreground shadow-xl backdrop-blur">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl">Admin Sign On</CardTitle>
                    <CardDescription>
                        Enter your credentials to access the admin dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5">
                        <div className="space-y-2 text-sm font-medium">
                            <label htmlFor="admin-email">Email</label>
                            <Input
                                id="admin-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="admin@enwiya.com"
                                required
                            />
                        </div>
                        <div className="space-y-2 text-sm font-medium">
                            <label htmlFor="admin-password">Password</label>
                            <Input
                                id="admin-password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-muted-foreground">
                                <input type="checkbox" name="remember" className="h-4 w-4" />
                                Remember me
                            </label>
                            <button
                                type="button"
                                className="text-primary hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 text-center text-xs text-muted-foreground">
                    <span>Authorized access only.</span>
                    <span>Need help? Contact the system administrator.</span>
                </CardFooter>
            </Card>
        </main>
    )
}

export default AdminPage