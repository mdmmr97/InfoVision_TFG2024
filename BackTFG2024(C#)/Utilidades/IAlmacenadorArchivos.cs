namespace BackTFG2024.Utilidades
{
    public interface IAlmacenadorArchivos
    {
        Task<bool> BorrarArchivo(string ruta, string name_entidad, string name_propiedad);
        Task<string> GuardarArchivo(string name_entidad, string name_propiedad, string name_save, IFormFile archivo);
        async Task<string> EditarArchivo(string ruta, string name_entidad, string name_propiedad, string name_save, IFormFile archivo)
        {
            await BorrarArchivo(ruta, name_entidad, name_propiedad);
            return await GuardarArchivo(name_entidad, name_propiedad, name_save, archivo);
        }
    }
}

