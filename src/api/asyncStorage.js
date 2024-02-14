import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ToastAndroid } from "react-native";


export const saveUserData = async (value) => {
    try {
      await AsyncStorage.setItem('CLIENT-TOKEN', JSON.stringify(value));
      ToastAndroid.show('Dados salvos com sucesso!', ToastAndroid.LONG)
    } catch (erro) {
        ToastAndroid.show('Erro ao salvar dados:'+erro.message, ToastAndroid.LONG)
      
    }
  };

  export const getUserData = async () => {
    try {
      const valor = await AsyncStorage.getItem('CLIENT-TOKEN');
      if (valor !== null) {
        //   ToastAndroid.show('Dados do usuário carregados', ToastAndroid.LONG)
          return JSON.parse(valor)
      } else {
        // ToastAndroid.show('Nenhum valor encontrado para a chave fornecida', ToastAndroid.LONG)
      }
    } catch (erro) {
      // ToastAndroid.show('Erro ao obter dados:'+ erro, ToastAndroid.LONG)
      
    }
}