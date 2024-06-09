import axios from "axios";
import { CreateUserDto } from "../model/user/user.dto";
import { CreateProjectDto } from "../model/project/project.dto";
import { BackendRoutesEnum } from "../routes";

const projectApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.PROJECTS}`,
  withCredentials: true,
});

export async function createProjectMutationFn({createProject, accessToken}: {createProject: CreateProjectDto, accessToken: string}) {
  const formData = new FormData();

  formData.append("title", createProject.title);
  formData.append("image", createProject.image);
  formData.append("address", createProject.address);
  formData.append("description", createProject.description);
  formData.append("fundingGoal", createProject.fundingGoal.toString());
  formData.append("fundingGoalDeadline", createProject.fundingGoalDeadline.toString());
  formData.append("volunteerGoal", createProject.volunteerGoal.toString());
  formData.append("volunteerGoalDeadline", createProject.volunteerGoalDeadline.toString());

  createProject.objectives.forEach((object) => {
    formData.append("objectiveImages", object.objectiveImage);
    formData.append("objectiveDescriptions", object.objective!);
  });

  formData.append("requirements", JSON.stringify(createProject.requirements));
  formData.append("organizerId", createProject.organizerId);

  return await projectApi.post("/", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getAllProjects() {
  return await projectApi.get(`/`);
}

export async function getProjectById(id: string) {
  return await projectApi.get(`/${id}`);
}

export async function getProjectsByOrganizer(organizerId: string) {
  return await projectApi.get(`/organizer/${organizerId}`);
}

export async function getProjectsByVolunteer(volunteerId: string) {
  return await projectApi.get(`/volunteer/${volunteerId}`);
}

export async function getProjectsByDonator(donatorId: string) {
  return await projectApi.get(`/donator/${donatorId}`);
}