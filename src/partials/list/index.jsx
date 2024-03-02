import {View, Text} from 'react-native'
import { Button, ButtonCount, ButtonDelete, ButtonIconCircle } from '../form/button'
import { NoPizza } from '../no-found'

const List = ({data, fun}) =>{

    const handleDelete = (id) =>{
        fun(() => data.filter(item => item !== id))
        
    }

    if(data.length > 0)
    {
        return data.map((item => {
            return (
                <View style={{ flexDirection : 'row', padding : 10, justifyContent : 'center', height: 70}}>
                    <View style={{width : '50%', justifyContent: 'center'}}>
                        <Text style={{fontWeight : 'bold', fontSize : 16, color : 'tomato'}}>
                            {item}
                        </Text>
        
                    </View>
                    <View style={{flexDirection : 'row', gap : 10, width : '30%', height : '100%', justifyContent : 'center', alignItems : 'center'}}>
                        <ButtonDelete id={item} fun={handleDelete} text={'X'} />
                    </View>
                </View>
            )
        }))

    }
    else
    {
        return (
            <NoPizza text={'Nenhum local de entrega'} />
        )
    }
}

export default List