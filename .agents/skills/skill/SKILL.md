---
name: skill
description: Usala cuando el usuario queira crear o modificar una funcionalidad siguiendo SDD. No usar para consultas teoricas.
---

##Development with SDD

## Objective
Develop functions following SDD. 
Specification -> Plan -> Task -> Implementation -> Verification

## Input
- Function description
- Documentation and code of project

If the function description or project documentation is incomplete, request the missing information before proceeding with the development.

## Output
Create a folder `specs/name_of_function` with:
-`spec.md` : function requirements and specifications
-`plan.md` : step-by-step plan for implementing the function
-`task.md` : breakdown of tasks required for implementation
-`implementation.md` : actual code implementation
-`verification.md` : tests and verification of the function

## Instructions
1. Analize the project and request.
2. Create `spec.md` with the function requirements and specifications.
3. Ask for approval of the specifications before proceeding with the plan.
4. Develop a step-by-step plan in `plan.md`.
5. Ask for approval of the plan before proceeding with the tasks.
6. Break down the tasks in `task.md`.
7. Ask for approval of the tasks before proceeding with the implementation.
8. Implement the function in `implementation.md`.
9. Verify the function in `verification.md`.
10. Ask for approval of the verification before considering the function development complete.

## Rules
- Do not proceed with any step without obtaining approval for the previous step.
- Do not implement the function without a clear and approved plan.
- Do not skip verification before considering the function development complete.
- Keep the documentation simple and clear.
- Check the completed tasks on `task.md`.

## Acceptance Criteria
The task is finished when:
- [ ] The three documents `spec.md`, `plan.md`, and `task.md` are completed and approved.
- [ ] The requirements are clear.
- [ ] The user approved each fase.
- [ ] All tasks are completed.
- [ ] The function cumplies with the requirements.
- [ ] The agent informs the final result to the user.

## Example

User: "I want to add a restaurant location"

The agent:
1. Review the project.
2. Create `spec.md` with the function requirements and specifications.
3. Ask for approval of the specifications.
4. Continues the instructions of the SDD.