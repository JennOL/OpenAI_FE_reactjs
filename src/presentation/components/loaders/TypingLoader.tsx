import { TypingLoaderProp } from '../../../interfaces'
import './TypingLoader.css'


export const TypingLoader = ({className}: TypingLoaderProp) => {
  return (
    <div className={`typing ${ className }`} >
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
    </div>
  )
}
