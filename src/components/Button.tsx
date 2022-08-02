import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
/**
 * É possível mesclar as tipagens de IButtonProps e também as que eu criei com Props.
 * utilizando o "&" 
 */
type Props = IButtonProps & {
  title: string;
}

export function Button( {title, ...rest }: Props) {
  return (
    <ButtonNativeBase
    bg="green.700"
    h={14}
    fontSize='sm'
    rounded='sm'
    _pressed={{
      bg: 'green.500'
    }}
    {...rest}>
      <Heading color='white' fontSize='sm'>
        { title }
      </Heading>
    </ButtonNativeBase>
  );
}