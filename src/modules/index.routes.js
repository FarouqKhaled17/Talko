import { globalError } from "../middleware/globalError.js"
import authRouter from "./auth/auth.routes.js"
import userRouter from "./users/user.routes.js"

export const bootstrap = (app) => {
    app.use("/api/v1/user", userRouter)
    app.use("/api/v1/auth", authRouter)
    app.use(globalError)
}