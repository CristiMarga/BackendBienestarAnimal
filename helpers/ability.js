const { AbilityBuilder, Ability } = require('@casl/ability'); 

const defineAbilityForAdmin = () => {

    const { can, build } = new AbilityBuilder(Ability);
  
    can('manage', 'all');
  
    return build();
  }

  module.exports = {
    defineAbilityForAdmin
  }

