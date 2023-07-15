/*import { getServerAuthSession } from "./api/auth/[...nextauth]"

export default async function handler (req, res) {
    const session = await getServerAuthSession(req, res)
    if (!session) {
       // throw new Error ('Unauthorized')
       res.status(401).json({message: "Unauthorized"})
    }
res.status(200).json({name: 'Agata Herbst'})
}*/