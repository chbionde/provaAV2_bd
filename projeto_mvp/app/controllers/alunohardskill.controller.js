
const models = require('../db/models');

exports.store = async (aluno, id)=>{
    
    const model = await models.aluno.findOne({

        where: {id_usuario: id}, include:{association: 'hardskills'}

    })

    let refsHardSkills = [];
    for (const h in aluno.hardskills) {
        
        let hardskill = aluno.hardskills[h];

        const [result] = await model.hardskill.findOrCreate({
            where: hardskill
        })

        refsHardSkills.push(result.id);

    }

    model.addHardskill(refsHardSkills);

}

exports.destroy = async (aluno, id)=>{
    
    const model = await models.aluno.findOne({

        where: {id_usuario: id}, include:{association: 'hardskills'}

    })

    let refsHardSkills = [];
    for (const h in aluno.hardskills) {
        
        let hardskill = aluno.hardskills[h];

        const result = await model.hardskill.findOne({
            where: hardskill
        })
        if (result) {
            refsHardSkills.push(result.id);
        }

    }

    model.removeHardskill(refsHardSkills);

}
