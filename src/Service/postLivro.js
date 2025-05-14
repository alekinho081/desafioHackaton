import axios from "axios"

const postaLivro = (data) =>{
        try{
            axios.post('https://6824eacc0f0188d7e72b5f68.mockapi.io/book/v1/livros', data)
        }catch(err){
            console.log(err)
        }
}


export default postaLivro