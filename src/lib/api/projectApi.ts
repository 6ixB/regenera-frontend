import axios from "axios";
import { CreateUserDto } from "../model/user/user.dto";
import {
  CreateProjectDto,
  UpdateProjectDto,
} from "../model/project/project.dto";
import { BackendRoutesEnum } from "../routes";

const projectApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.PROJECTS}`,
  withCredentials: true,
});

export async function createProjectMutationFn({
  createProjectDto,
  accessToken,
}: {
  createProjectDto: CreateProjectDto;
  accessToken: string;
}) {
  const formData = new FormData();

  formData.append("title", createProjectDto.title);
  formData.append("image", createProjectDto.image);
  formData.append("address", createProjectDto.address);
  formData.append("description", createProjectDto.description);
  formData.append("fundingGoal", createProjectDto.fundingGoal.toString());
  formData.append(
    "fundingGoalDeadline",
    createProjectDto.fundingGoalDeadline.toString(),
  );
  formData.append("volunteerGoal", createProjectDto.volunteerGoal.toString());
  formData.append(
    "volunteerGoalDeadline",
    createProjectDto.volunteerGoalDeadline.toString(),
  );

  createProjectDto.objectives.forEach((object) => {
    formData.append("objectiveImages", object.objectiveImage);
    formData.append("objectiveDescriptions", object.objective!);
  });

  formData.append("requirements", JSON.stringify(createProjectDto.requirements));
  formData.append("organizerId", createProjectDto.organizerId);

  return await projectApi.post("/", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function updateProjectMutationFn({
  id,
  updateProjectDto,
  accessToken,
}: {
  id: string
  updateProjectDto: UpdateProjectDto;
  accessToken: string;
}) {
 
  return await projectApi.patch(`/${id}`, updateProjectDto, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function getAllProjectsFn() {
  return await projectApi.get(`/`);
}

export async function getProjectByIdFn(id: string) {
  return await projectApi.get(`/${id}`);
}

export async function getProjectsByOrganizerFn(organizerId: string) {
  return await projectApi.get(`/organizer/${organizerId}`);
}

export async function getProjectsByVolunteerFn(volunteerId: string) {
  return await projectApi.get(`/volunteer/${volunteerId}`);
}

export async function getProjectsByDonatorFn(donatorId: string) {
  return await projectApi.get(`/donator/${donatorId}`);
}

export async function getProjectTopDonationsFn(id: string) {
  return await projectApi.get(`top-donations/${id}`);
}

export async function getPopularProjectsFn() {
  return await projectApi.get(`/popular`);
}
