import AsyncStorage from "@react-native-async-storage/async-storage";
 import { ToastAndroid } from "react-native";


export const saveUserData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      //  ToastAndroid.show('Dados salvos com sucesso!', ToastAndroid.LONG)
    } catch (erro) {
         ToastAndroid.show('Erro ao salvar dados:'+erro.message, ToastAndroid.LONG)
      
    }
  };

  export const getUserData = async (key) => {
    try {
      const valor = await AsyncStorage.getItem(key);
      if (valor != null && valor != undefined) {
            // ToastAndroid.show('Dados do usuário carregados', ToastAndroid.LONG)
            return JSON.parse(valor)
      } else {
           ToastAndroid.show('Nenhum valor encontrado para a chave fornecida', ToastAndroid.LONG)
      }
    } catch (erro) {
       ToastAndroid.show('Erro ao obter dados:'+ erro, ToastAndroid.LONG)
      
    }
  }

    export const deleteUserData = async (key) => {
      try {
        const valor = await AsyncStorage.removeItem(key);
        if (valor !== null) {
            //  ToastAndroid.show('Dados do usuário carregados', ToastAndroid.LONG)
            // return JSON.parse(valor)
        } else {
          //  ToastAndroid.show('Nenhum valor encontrado para a chave fornecida', ToastAndroid.LONG)
        }
      } catch (erro) {
         ToastAndroid.show('Erro ao obter dados:'+ erro, ToastAndroid.LONG)
        
      }
    }
