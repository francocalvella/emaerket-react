import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"

export default function NotFound(){
    return(
        <main className='not-found-main'>
            <FontAwesomeIcon className="question-sign" icon={faCircleQuestion} />
            <p>Sorry, seems we could not find it</p>
        </main>
 )
}