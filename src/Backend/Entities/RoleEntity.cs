namespace SimpleBank.Backend.Entities;

public class RoleEntity
{
    [Key]
    public short Id { get; set; }
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;
    public virtual ICollection<UserMapRoleEntity> UserMapRoles { get; set; } = new HashSet<UserMapRoleEntity>();
}