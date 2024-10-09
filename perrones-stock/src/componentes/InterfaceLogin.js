import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const LoginInterface = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Card className="m-auto w-full max-w-4xl overflow-hidden">
        <div className="flex">
          <div className="w-1/2 bg-pink-200 p-8">
            <div className="mb-8 text-center">
              <div className="inline-block rounded-full bg-white p-4">
              <img src={`${process.env.PUBLIC_URL}/hotdog-logo.png`} alt="Hotdogs Perrones Logo" className="h-24 w-24" />
              </div>
            </div>
            <CardContent>
              <Input className="mb-4" placeholder="Carnet" />
              <Input className="mb-4" type="password" placeholder="Contraseña" />
              <Button className="w-full mb-4 bg-yellow-500 hover:bg-yellow-600 text-white">Inicio Sesión</Button>
              <p className="text-center mb-4">¿Aún no estás registrado?</p>
              <Button variant="outline" className="w-full">¡Regístrate!</Button>
            </CardContent>
          </div>
          <div className="w-1/2 bg-white p-8 flex flex-col justify-center items-center">
          <img src={`${process.env.PUBLIC_URL}/hotdog-cart.jpg`} alt="Hot Dog Cart" className="max-w-xs mb-4" />
            <h2 className="text-xl font-bold mb-2">Los más ricos de San Salvador.</h2>
            <p className="text-blue-500">¡Inicia sesión para empezar!</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginInterface;