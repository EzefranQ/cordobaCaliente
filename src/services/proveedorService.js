const proveedorService = {
    proveedores: [
        { empresa: "Google", nombre: "Chabe", apellido: "huguito", cuit: 43, direccion: 'AV 3, Manizales', localidad: 'Manizales', telefono: '092314', correo: '@gmail.com', condicionIVA: 31 },
        { empresa: "Facebook", nombre: "silia", apellido: "flore", cuit: 34, direccion: 'AV 3, Manizales', localidad: 'Manizales', telefono: '092314', correo: '@gmail.com', condicionIVA: 25 },
        { empresa: "X", nombre: "Nicola", apellido: "maduro", cuit: 232, direccion: 'AV 3, Manizales', localidad: 'Manizales', telefono: '092314', correo: '@gmail.com', condicionIVA: 43 },
    ],
  
    getProveedor() {
      return this.proveedores;
    },
  
    registrarProveedor(proveedor) {
      this.proveedores.push(proveedor);
    },
  };
  
  export default proveedorService;
  