// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') { 
    res.status(405).json({message: 'method should be POST'});
  } else { 
    try { 
      const {body} = req;
      const url = 'https://api.openai.com/v1/chat/completions';
      const headers = { 
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }; 
     
      const response = await axios.post(url, body, { headers: headers})
      res.status(200).json(response.data);
    } catch (error) { 
      console.log(error);
      res.status(500).json({ message: "Algo de errado aconteceu"});
    }
  }
  
}
