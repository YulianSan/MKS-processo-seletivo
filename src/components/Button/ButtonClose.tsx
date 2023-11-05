import { AiOutlineClose } from 'react-icons/ai'
import * as S from '@/styled/components/Buttons'

interface PropsButtonClose {
	close: () => void
	fontSize?: string
}

export function ButtonClose({ close, fontSize = '1.5rem' }: PropsButtonClose) {
	return (
		<S.ButtonClose onClick={close}>
			<AiOutlineClose />
		</S.ButtonClose>
	)
}
