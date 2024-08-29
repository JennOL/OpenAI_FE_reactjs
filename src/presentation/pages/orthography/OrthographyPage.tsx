import { useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TextMessageBoxFile, TextMessageBoxSelect, TypingLoader } from "../../components"
import { OrthographyMessage } from "../../../interfaces";

export const OrthographyPage = () => {

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

      {/*<TextMessageBox
        onSendMessage={ handlePost }
        placeholder="Escribe tu texto aquí"
        disabledCorrections
      />

      <TextMessageBoxFile
        onSendMessage={ handlePost }
        placeholder="Escribe tu texto aquí"
      />*/}

      <TextMessageBoxSelect
        onSendMessage={ () => console.log }
        options={[
          {id:'1', text:'Opcion 1'},
          {id:'2', text:'Opcion 2'},
          {id:'3', text:'Opcion 3'},
        ]}
      />

    </div>
  )
}
