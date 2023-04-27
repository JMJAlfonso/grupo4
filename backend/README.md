## INSTALACION 
1. Clonar
```
git clone https://github.com/JMJAlfonso/grupo4-losMessianos.git
```
2. Colocarse dentro del directorio BACKEND e instalar dependencias
```
npm install
```
3. Configurar archivo `.env`. Se puede copiar el contenido de `.env.example` y configurar tus credenciales de base de datos.

4. Crear la base de datos `mydb` con MySQLWorkbench o tu administrador de base de datos.
5. Abrir una terminal y correr los siguientes comandos para crear la estructura de la base de datos:
```
npm run migrate
npm run seed:all
```
6. Para iniciar el proyecto se debe correr con el siguiente comando:  
```
npm run dev
```