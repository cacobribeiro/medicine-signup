import app from './index'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT: string = process.env.PORT || '3002'

app.listen(PORT, () => console.log(` Listening on ${PORT}`))
