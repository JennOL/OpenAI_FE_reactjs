import { FormEvent, useState } from "react";
import { TextMessageBoxSelectProp } from "../../../interfaces"


export const TextMessageBoxSelect = ({onSendMessage, placeholder, disabledCorrections = false, options}:TextMessageBoxSelectProp) => {

    const [message, setMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if( message.trim().length === 0 ) return;

        onSendMessage(message, selectedOption);
        setMessage('');
    }
  
  return (
    <form 
        onSubmit={handleSendMessage}
        className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
        <div className="flex-grow">
            <div className="flex">
                <input 
                    type="text" 
                    autoFocus 
                    name="message" 
                    className="w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10" 
                    placeholder={placeholder}
                    autoComplete={ disabledCorrections ? 'on' : 'off' }
                    autoCorrect={ disabledCorrections ? 'on' : 'off' }
                    spellCheck={ disabledCorrections ? 'true' : 'false'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <select 
                    name="select"
                    className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value=''>Seleccione...</option>
                    {
                        options.map(({id, text}) => (
                            <option key={id} value={id}>{text}</option>
                        ))
                    }
                </select>
            </div>
        </div>

        <div className="ml-4">
            <button className="btn-primary">
                <span className="mr-2">Send</span>
                <i className="fa-regular fa-paper-plane"></i>
            </button>
        </div>

    </form>
  )
}
