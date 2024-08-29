import { useState } from "react"
import { OrthographyMessage } from "../../interfaces";
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from "../components";


export const ChatTemplate = () => {

  const [idLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<OrthographyMessage[]>([]);

  const handlePost = async(text:string)=>{
    setIsLoading(true);
    setMessages((prev)=> [...prev, {text, isGpt:false}]);

    // TODO: UseCase

    setIsLoading(false);

    // TODO: Añadir el mensaje de isGPT en true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
            <GptMessage text='Hola, puedes escribir tu texto en español, y te ayudo con las correcciones.' />

            {
              messages.map((message, index) => (
                message.isGpt 
                ? 
                  <GptMessage key={index} text={`Esto es de OpenAI`} /> 
                : 
                  <MyMessage key={index} text={message.text} />
              ))
            }

            {
              idLoading &&
                <div className="col-start-1 col-end-12 fade-in">
                  <TypingLoader className="fade-in" />
                </div>
            }

        </div>
      </div>

      <TextMessageBox
        onSendMessage={ handlePost }
        placeholder="Escribe tu texto aquí"
        disabledCorrections
      />

    </div>
  )
}
