import axios from "axios";
import { CreateUserDto } from "../model/user/user.dto";
import { CreateProjectDto } from "../model/project/project.dto";
import { BackendRoutesEnum } from "../routes";

const projectApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.PROJECTS}`,
  withCredentials: true,
});

export async function createProjectMutationFn(createProject: CreateProjectDto){

    const formData = new FormData()

    formData.append('title', createProject.title)
    formData.append('image', createProject.image)
    formData.append('address', createProject.address)
    formData.append('description', createProject.description)
    formData.append('fundingGoal', createProject.fundingGoal.toString())
    formData.append('deadline', createProject.deadline.toString())
    formData.append('objectives', JSON.stringify(createProject.objectives))
    formData.append('requirements', JSON.stringify(createProject.requirements))
    formData.append('organizerId', createProject.organizerId)

    console.log(formData);
    

    return await projectApi.post('/', formData)
}