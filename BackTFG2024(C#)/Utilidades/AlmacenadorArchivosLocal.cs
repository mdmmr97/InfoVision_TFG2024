namespace BackTFG2024.Utilidades
{
    public class AlmacenadorArchivosLocal : IAlmacenadorArchivos
    {

        private readonly IWebHostEnvironment _env;
        private readonly IHttpContextAccessor _context;

        public AlmacenadorArchivosLocal(IWebHostEnvironment env, IHttpContextAccessor context)
        {
            _env = env;
            _context = context;
        }

        public async Task<bool> BorrarArchivo(string ruta, string name_entidad, string name_propiedad)
        {
            if (string.IsNullOrEmpty(ruta)) return false;

            string nombreArchivo = Path.GetFileName(ruta);
            string directorioArchivo = Path.Combine(_env.WebRootPath, name_entidad, name_propiedad, nombreArchivo);

            if (File.Exists(directorioArchivo)) File.Delete(directorioArchivo);
            return true;
        }

        public async Task<string> GuardarArchivo(string name_entidad, string name_propiedad, string name_save, IFormFile archivo)
        {
            string extension = Path.GetExtension(archivo.FileName);
            string nombrearchivo = $"{name_save}{extension}";
            string folder = Path.Combine(_env.WebRootPath, name_entidad, name_propiedad);

            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            string ruta = Path.Combine(folder, nombrearchivo);
            using (MemoryStream memoryStream = new MemoryStream())
            {
                await archivo.CopyToAsync(memoryStream);
                byte[] contenido = memoryStream.ToArray();
                await File.WriteAllBytesAsync(ruta, contenido);
            }
            string urlActual = $"{_context.HttpContext!.Request.Scheme}://{_context.HttpContext.Request.Host}";
            string urlBD = Path.Combine(urlActual, name_entidad, name_propiedad, nombrearchivo).Replace("\\", "/");

            return urlBD;
        }
    }
}
