import type { Skill } from "./models/skill";

function Skills() {
  const softwareArchitectureSkills: Skill[] = [
    { name: "Agile", proficiency: 80, level: "Advanced" },
    { name: "TDD", proficiency: 70, level: "Proficient" },
    { name: "DDD", proficiency: 40, level: "Intermediate" },
    { name: "Clean Architecture", proficiency: 80, level: "Advanced" },
    { name: "Microservices", proficiency: 50, level: "Intermediate" },
    { name: "Observability", proficiency: 50, level: "Intermediate" },
  ];
  const frontendSkills: Skill[] = [
    { name: "Vue", proficiency: 90, level: "Advanced" },
    { name: "React", proficiency: 70, level: "Proficient" },
    { name: "Angular", proficiency: 70, level: "Proficient" },
    { name: "Svelte", proficiency: 40, level: "Beginner" },
    { name: "JavaScript", proficiency: 90, level: "Advanced" },
    { name: "Vite", proficiency: 60, level: "Proficient" },
    { name: "TypeScript", proficiency: 85, level: "Advanced" },
    { name: "HTML/CSS", proficiency: 90, level: "Advanced" },
    { name: "Cypress", proficiency: 60, level: "Intermediate" },
    { name: "Playwright", proficiency: 30, level: "Beginner" },
  ];

  const devOpsSkills: Skill[] = [
    { name: "Docker", proficiency: 70, level: "Proficient" },
    { name: "Kubernetes", proficiency: 65, level: "Proficient" },
    { name: "Azure", proficiency: 70, level: "Proficient" },
    { name: "Github CI/CD", proficiency: 70, level: "Proficient" },
    { name: "Terraform", proficiency: 40, level: "Beginner" },
    { name: "AWS", proficiency: 40, level: "Beginner" },
    { name: "Vercel", proficiency: 40, level: "Beginner" },
  ];

  const backendSkills: Skill[] = [
    { name: "C#", proficiency: 60, level: "Intermediate" },
    { name: ".Net Core", proficiency: 60, level: "Intermediate" },
    { name: "Node.js", proficiency: 60, level: "Intermediate" },
    { name: "SQL", proficiency: 50, level: "Intermediate" },
    { name: "Kafka", proficiency: 35, level: "Beginner" },
    { name: "Hangfire", proficiency: 50, level: "Intermediate" },
    { name: "Python", proficiency: 40, level: "Beginner" },
    { name: "MassTransit", proficiency: 35, level: "Beginner" },
  ];

  return (
    <>
      <div className='mb-6 text-primary-text'>
        <div className='text-center'>
          <h1 className='text-3xl'>Where Practice makes perfect </h1>
          <p>An overview of my skills over the years</p>
        </div>

        <section className='mt-8'>
          <strong className='text-2xl md:text-lg'>Software architecture</strong>
          {softwareArchitectureSkills.map((skill) => (
            <div className='my-4' key={skill.name}>
              <div className='flex justify-between mb-1'>
                <strong className='text-secondary'>{skill.name}</strong>
                <strong className='text-secondary'>{skill.level}</strong>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-secondary h-2.5 rounded-full'
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
        <section className='mt-8'>
          <strong className='text-2xl md:text-lg'>Frontend development</strong>
          {frontendSkills.map((skill) => (
            <div className='my-4' key={skill.name}>
              <div className='flex justify-between mb-1'>
                <strong className='text-secondary'>{skill.name}</strong>
                <strong className='text-secondary'>{skill.level}</strong>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-secondary h-2.5 rounded-full'
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
        <section className='mt-8'>
          <strong className='text-2xl md:text-lg'>DevOps</strong>
          {devOpsSkills.map((skill) => (
            <div className='my-4' key={skill.name}>
              <div className='flex justify-between mb-1'>
                <strong className='text-secondary'>{skill.name}</strong>
                <strong className='text-secondary'>{skill.level}</strong>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-secondary h-2.5 rounded-full'
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
        <section className='mt-8'>
          <strong className='text-2xl md:text-lg'>Backend</strong>
          {backendSkills.map((skill) => (
            <div className='my-4' key={skill.name}>
              <div className='flex justify-between mb-1'>
                <strong className='text-secondary'>{skill.name}</strong>
                <strong className='text-secondary'>{skill.level}</strong>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-secondary h-2.5 rounded-full'
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Skills;
