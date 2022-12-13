import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { 
    ok: boolean,
    message: string | string[]
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {


    const { message = 'Bad request' } = req.query;

    return res.status(400).json({ 
        ok: false,
        message
    });
}