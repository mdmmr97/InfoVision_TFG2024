using System.Security.Cryptography;

namespace BackTFG2024.Utilidades
{
    public class EncriptarPassword
    {
        public static string Encriptar(string password)
        {
            SHA256 sha256 = SHA256.Create();
            byte[] hashedBytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
        }

        public static bool Verificar(string password, string passwordHash)
        {
            return Encriptar(password) == passwordHash;
        }
    }
}