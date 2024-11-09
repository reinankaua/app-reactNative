import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

export function Search() {
    return (
        <View
            className="w-full flex-row border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent"
            style={{ borderWidth: 1, borderRadius: 20 }} >

            <Feather name="search" size={24} color="#64748b" />
            <TextInput
                placeholder="Procure sua comida"
                className='w-full h-full flex-1 bg-transparent'
            />
        </View>
    );
}