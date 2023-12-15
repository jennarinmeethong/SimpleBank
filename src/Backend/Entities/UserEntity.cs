namespace SimpleBank.Backend.Entities;
[Table("Users")]
public class UserEntity
{
    [Key]
    public int Id { get; set; }
    [MaxLength(50)]
    public string Username { get; set; } = string.Empty;
    [MaxLength(255)]
    public string Password { get; set; } = string.Empty;
    public virtual ICollection<UserMapRoleEntity> UserMapRoleEntities { get; set; } = new HashSet<UserMapRoleEntity>();
}
