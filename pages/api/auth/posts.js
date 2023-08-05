import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from "next-auth/next";

function titleFromCode(code){
    return code.trim().split('\n') [0].replace('//','')
}

async function post(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        res.status(401).json({error: 'Unauthorized'})
        return 
    }

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if (!prismaUser) {
        res.status(401).json({error: 'Unauthorized'})
        return
    }


    const { language, code } = req.body
    const title = titleFromCode(code)
    const post = await prisma.post.create({
        data: {
            title, 
            language,
            code,
            userId: prismaUser.id,
        },
    })
    res.status(201).json(post)
}

export default async function handler(req,res) {
    const { method } = req
    switch (method) {
        case 'POST':
            post(req, res)
            break
            default:
    }
}