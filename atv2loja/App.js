import * as React from 'react';
import { Button, Text, View, ViewBase , Image, TouchableOpacity,ScrollView,Icon} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import estilo from './src/Estilo/style';
import Icone from 'react-native-vector-icons/Ionicons';
import Mi from 'react-native-vector-icons/MaterialCommunityIcons';

{/*HOME*/}
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={[estilo.back]}>
        {/*IMAGEM MENU*/}
        <View>
          <Image style={[estilo.fundo]} source={require('./src/Imagens/fundo.png')}></Image>
        </View>
        {/*MODA FEMININA*/}
        <View>
          <Text style={[estilo.moda]}>Moda Feminina</Text>
        
        </View>
        <View style={[estilo.container]}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Detalhe1')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido1.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 170,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido2.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 220,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido3.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 290,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
        </View>
        {/*MODA MASCULINA*/}
        <View>
          <Text style={[estilo.moda]}>Moda Masculina</Text>
        </View>
        <View style={[estilo.container]}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa1.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 99,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
          </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa2.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 149,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa3.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 179,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    
  );
}
{/*CATEGORIAS*/}
function CategoriaScreen({navigation})
{
  return(
    <ScrollView style={[estilo.back]}>
      {/*MODA MASCULINA*/}
      <View>
          <Text style={[estilo.moda]}>Moda Masculina</Text>
        </View>
        <View style={[estilo.container]}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa1.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 99,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
          </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa2.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 149,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa3.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 179,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
        </View>
        {/*MODA FEMININA*/}
        <View>
          <Text style={[estilo.moda]}>Moda Feminina</Text>
        
        </View>
        <View style={[estilo.container]}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Detalhe1')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido1.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 170,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido2.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 220,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido3.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 290,00</Text>
            <Button title='Comprar' onPress={() => navigation.navigate('Categorias')}/>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}
{/*SOBRE A LOJA*/}
function SobreScreen({navigation})
{
  return(
    <ScrollView style={[estilo.back]}>
      {/*DESCRIÇÃO*/}
      <View>
          <Text style={[estilo.bemvindo]}>Bem vindos ao BAZAAR</Text>
        </View>
        <View style={[estilo.container]}>
          <Text style={[estilo.info]}>
          Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. 
          Produtos de bom gosto especificamente para você.
          Descubra Our Story e aproveite as promoções.
          </Text>
        </View>
        {/*LOCALIZAÇÃO*/}
        <View style={[estilo.txtmaps]}>
          <Text style={[estilo.txtmaps]}>Rua Riachuelo, 1245</Text>
          <Text style={[estilo.txtmaps]}>Centro, Porto Alegre</Text>
          <Text style={[estilo.txtmaps]}>Aberto de seg a sex das 10h à 21h</Text>
        </View>
        <View>
          <TouchableOpacity>
          <Image style={[estilo.maps]} source={require('./src/Imagens/maps.png')}></Image>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
{/*CARTÃO*/}
function CompraScreen({navigation})
{
  return (
    <ScrollView style={[estilo.back]}>
    <View style={[estilo.screen]}>
      <Text style={[estilo.txtcompra]}>Conheça todas as nossas formas de pagamentos</Text>
      <Image style={[estilo.pago]} source={require('./src/Imagens/pago.png')}/>
      <Button title='Continuar Comprando' onPress={() => navigation.navigate('Bazzar')}/>
      
    </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bazzar" component={HomeScreen}
        options={{tabBarIcon: ({color, size}) => <Icone name='home' color={color} size={size}/>}}
        />
        <Tab.Screen name="Categorias" component={CategoriaScreen}
        options={{tabBarIcon: ({color,size}) => <Icone name='menu-outline' color={color} size={size}/>}}
        />
        <Tab.Screen name="Sobre a Loja" component={SobreScreen} 
        options={{tabBarIcon: ({color,size}) => <Icone name='planet-outline' color={color} size={size}/>}}
        />
        <Tab.Screen name="Cartão" component={CompraScreen}
        options={{tabBarIcon: ({color,size}) => <Icone name='card' color={color} size={size}/>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
